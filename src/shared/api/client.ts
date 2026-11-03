const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';


interface RequestOptions extends RequestInit {
    params?: Record<string, string | number | boolean>
}


export class ApiError extends Error {
    constructor(public status: number, public message: string, public data?: unknown){
        super(message);
        this.name = 'ApiError'
    }
}

export async function httpClient<T>(
  endpoint: string,
  { params, headers, ...customConfig }: RequestOptions = {}
): Promise<T> {
  const url = new URL(`${BASE_URL}${endpoint}`);
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value));
      }
    });
  }

  const config: RequestInit = {
    ...customConfig,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  const response = await fetch(url.toString(), config);
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new ApiError(
      response.status,
      data?.message || 'خطایی در برقراری ارتباط با سرور رخ داده است',
      data
    );
  }

  return data as T;
}