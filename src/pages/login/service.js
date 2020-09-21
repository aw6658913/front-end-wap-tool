import Request from '@/utils/request';

export async function login (param = {}) {
  const queryParam = JSON.stringify(param);
  return Request(
    {
      url: 'site/login',
      method: 'POST',
      param: { queryParam },
    },
    true
  );
}

export async function getCode (param = {}) {
  const queryParam = JSON.stringify(param);
  return Request(
    {
      url: 'site/login',
      method: 'POST',
      param: { queryParam },
    },
    true
  );
}
