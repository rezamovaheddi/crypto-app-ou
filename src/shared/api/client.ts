const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean>;
}

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public data?: unknown,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function httpClient<T>(
  endpoint: string,
  { params, headers, ...customConfig }: RequestOptions = {},
): Promise<T> {
  const url = BASE_URL
    ? new URL(`${BASE_URL}${endpoint}`)
    : new URL(
        endpoint,
        typeof window !== "undefined"
          ? window.location.origin
          : "http://localhost:3000",
      );

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
      "Content-Type": "application/json",
      ...headers,
    },
  };

  const response = await fetch(url.toString(), config);
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new ApiError(
      response.status,
      data?.message || "An unexpected error occurred while fetching data.",
      data,
    );
  }

  return data as T;
}
