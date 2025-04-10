import request from '@/utils/request';

const DICTIONARY_API = 'http://localhost:8081/api';

/**
 * 分页查询字典列表
 */
export async function pageDictionaries(params) {
  const res = await request.get('/system/dictionary/page', { params });
  if (res.data.code === 0) {
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 查询字典列表
 */
export async function listDictionaries(params) {
  const res = await request.get(DICTIONARY_API + '/system/dictionary', {
    params
  });
  if (res.data.code === 0) {
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 添加字典
 */
export async function addDictionary(data) {
  const res = await request.post(DICTIONARY_API + '/system/dictionary', data);
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 修改字典
 */
export async function updateDictionary(data) {
  const res = await request.put(DICTIONARY_API + '/system/dictionary', data);
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 删除字典
 */
export async function removeDictionary(id) {
  const res = await request.delete(DICTIONARY_API + '/system/dictionary/' + id);
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}
