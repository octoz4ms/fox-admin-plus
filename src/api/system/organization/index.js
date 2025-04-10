import request from '@/utils/request';
const ORGANIZATION_API = 'http://127.0.0.1:8081/api';

/**
 * 分页查询机构
 */
export async function pageOrganizations(params) {
  const res = await request.get('/system/organization/page', { params });
  if (res.data.code === 0) {
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 查询机构列表
 */
export async function listOrganizations(params) {
  const res = await request.get(ORGANIZATION_API + '/system/organization', {
    params
  });
  if (res.data.code === 0 && res.data.data) {
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 添加机构
 */
export async function addOrganization(data) {
  const res = await request.post(
    ORGANIZATION_API + '/system/organization',
    data
  );
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 修改机构
 */
export async function updateOrganization(data) {
  const res = await request.put(
    ORGANIZATION_API + '/system/organization',
    data
  );
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 删除机构
 */
export async function removeOrganization(id) {
  const res = await request.delete(
    ORGANIZATION_API + '/system/organization/' + id
  );
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}
