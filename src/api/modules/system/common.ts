import http from '@/api';
import { ADMIN_MODULE } from '@/api/helper/prefix';
import type { CommonTemplateDown } from '@/api/types/system/common';

/**
 * 模版下载
 */
export const downloadTemplate = (params: CommonTemplateDown) => {
  return http.template(ADMIN_MODULE + `/common/download/templates`, params);
};
