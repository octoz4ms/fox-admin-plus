import request from '@/utils/request';

const DICTIONARY_DATA_API = 'http://localhost:8081/api';

/**
 * 分页查询字典数据
 */
export async function pageDictionaryData(params) {
  const res = await request.get(
    DICTIONARY_DATA_API + '/system/dictionary-data/page',
    { params }
  );
  if (res.data.code === 0) {
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 查询字典数据列表
 */
export async function listDictionaryData(params) {
  const res = await request.get(
    DICTIONARY_DATA_API + '/system/dictionary-data',
    { params }
  );
  if (res.data.code === 0 && res.data.data) {
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 添加字典数据
 */
export async function addDictionaryData(data) {
  const res = await request.post(
    DICTIONARY_DATA_API + '/system/dictionary-data',
    data
  );
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 修改字典数据
 */
export async function updateDictionaryData(data) {
  const res = await request.put(
    DICTIONARY_DATA_API + '/system/dictionary-data',
    data
  );
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 删除字典数据
 */
export async function removeDictionaryData(id) {
  const res = await request.delete(
    DICTIONARY_DATA_API + '/system/dictionary-data/' + id
  );
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 批量删除字典数据
 */
export async function removeDictionaryDataBatch(data) {
  const res = await request.delete(
    DICTIONARY_DATA_API + '/system/dictionary-data/batch',
    { data }
  );
  if (res.data.code === 0) {
    return res.data.message;
  }
  return Promise.reject(new Error(res.data.message));
}
