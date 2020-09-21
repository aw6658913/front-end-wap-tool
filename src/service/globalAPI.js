import Request from '@/utils/request';

export async function getOpenId (param = {}) {
  const queryParam = JSON.stringify(param);
  return Request(
    {
      url: 'site/wx/appletopenid',
      method: 'GET',
      param: { queryParam },
    },
    true
  );
}

export async function userInfo (param = {}) {
  return Request(
    {
      url: 'site/staff/currentinfo',
      method: 'GET',
      param,
    },
    true
  );
}
