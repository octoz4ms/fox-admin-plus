import request from '@/utils/request';

const MENU_API = 'http://127.0.0.1:8081/api';

/**
 * 分页查询菜单
 */
export async function pageMenus(params) {
  const res = await request.get('/system/menu/page', { params });
  if (res.data.code === 0) {
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 查询菜单列表
 */
export async function listMenus(params) {
  const res = await request.get(MENU_API + '/system/menu', {
    params
  });
  if (res.data.code === 0 && res.data.data) {
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.message));
  // const res = await request.get('/system/menu', {
  //   params
  // });
  // if (res.data.code === 0 && res.data.data) {
  //   return res.data.data;
  // }
  // return Promise.reject(new Error(res.data.message));
}

/**
 * 添加菜单
 */
export async function addMenu(data) {
  const res = await request.post(MENU_API + '/system/menu', data);
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 修改菜单
 */
export async function updateMenu(data) {
  const res = await request.put(MENU_API + '/system/menu', data);
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 删除菜单
 */
export async function removeMenu(id) {
  const res = await request.delete(MENU_API + '/system/menu/' + id);
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}
