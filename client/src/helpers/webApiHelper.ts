import * as queryString from 'query-string';

type TypeArgs = {
  endpoint: string;
  type: 'GET' | 'POST' | 'PUT' | 'DELETE';
  query?: { [item: string]: string };
  request?: { [item: string]: string };
  attachment?: string | Blob;
  skipAuthorization?: boolean;
  ct?: AbortSignal;
};

function getFetchUrl(args: TypeArgs): string {
  return args.endpoint + (args.query ? `?${queryString.stringify(args.query)}` : '');
}

function getFetchArgs(args: TypeArgs): RequestInit {
  const headers: HeadersInit = {};
  if (!args.attachment) {
    headers['Content-Type'] = 'application/json';
    headers.Accept = 'application/json';
  }
  const token = localStorage.getItem('token');
  if (token && !args.skipAuthorization) {
    headers.Authorization = `Bearer ${token}`;
  }
  let body;
  if (args.attachment) {
    if (args.type === 'GET') {
      throw new Error('GET request does not support attachments.');
    }
    const formData = new FormData();
    formData.append('image', args.attachment);
    body = formData;
  } else if (args.request) {
    if (args.type === 'GET') {
      throw new Error('GET request does not support request body.');
    }
    body = JSON.stringify(args.request);
  }
  return {
    method: args.type,
    headers,
    signal: args.ct,
    ...(args.type === 'GET' ? {} : { body }),
  };
}

export async function throwIfResponseFailed(res: Response): Promise<void> {
  if (!res.ok) {
    let parsedException = 'Something went wrong with request!';
    try {
      parsedException = await res.json();
    } catch (err) {
      //
    }
    throw parsedException;
  }
}

export default async function callWebApi(args: TypeArgs): Promise<Response> {
  const res = await fetch(getFetchUrl(args), getFetchArgs(args));
  await throwIfResponseFailed(res);
  return res;
}
