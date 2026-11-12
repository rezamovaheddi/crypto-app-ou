import { NextResponse } from "next/server";

export interface ApiSuccesResponse<T>{
    success: true;
    data:T
    meta?:{
        page?:number;
        limit?:number;
        total?:number;
    }

}

export interface ApiErrorMessage{
    success: false
    error:{
        code?: string;
        message?: string;
        details?: unknown;
    }
}

export type ApiResponseType<T> = ApiSuccesResponse<T> | ApiErrorMessage;


export class ApiResponse {
  static success<T>(data: T, status = 200, meta?: ApiSuccesResponse<T>['meta']) {
    return NextResponse.json<ApiSuccesResponse<T>>(
      {
        success: true,
        data,
        ...(meta && { meta }),
      },
      { status }
    );
  }

  static error(message: string, code = 'INTERNAL_ERROR', status = 500, details?: unknown) {
    const errorPayload: ApiErrorMessage['error'] = {
      code,
      message,
    };

    if (details !== undefined) {
      errorPayload.details = details;
    }

    return NextResponse.json<ApiErrorMessage>(
      {
        success: false,
        error: errorPayload,
      },
      { status }
    );
  }
}