import request from '@/utils/request';
const USER_API = 'http://localhost:8081/api';

/**
 * 分页查询用户
 */
export async function pageUsers(params) {
  const res = await request.get(USER_API + '/system/user/page', { params });
  if (res.data.code === 0) {
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 查询用户列表
 */
export async function listUsers(params) {
  const res = await request.get('/system/user', {
    params
  });
  if (res.data.code === 0 && res.data.data) {
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 根据id查询用户
 */
export async function getUser(id) {
  const res = await request.get('/system/user/' + id);
  if (res.data.code === 0 && res.data.data) {
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 添加用户
 */
export async function addUser(data) {
  const res = await request.post(USER_API + '/system/user', data);
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 修改用户
 */
export async function updateUser(data) {
  const res = await request.put(USER_API + '/system/user', data);
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 删除用户
 */
export async function removeUser(id) {
  const res = await request.delete(USER_API + '/system/user/' + id);
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 批量删除用户
 */
export async function removeUsers(data) {
  const res = await request.delete(USER_API + '/system/user/batch', {
    data
  });
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 修改用户状态
 */
export async function updateUserStatus(id, status) {
  const res = await request.put(USER_API + '/system/user/status', {
    id,
    status
  });
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 重置用户密码
 */
export async function updateUserPassword(id, password = '123456') {
  const res = await request.put(USER_API + '/system/user/password', {
    id,
    password
  });
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 导入用户
 */
export async function importUsers(file) {
  const formData = new FormData();
  formData.append('file', file);
  const res = await request.post('/system/user/import', formData);
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 检查用户是否存在
 */
export async function checkExistence(field, value, id) {
  const res = await request.get(USER_API + '/system/user/existence', {
    params: { field, value, id }
  });
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}
