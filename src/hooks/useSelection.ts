import { ref, computed } from 'vue';

/**
 * @description 表格多选数据操作
 * @param {String} rowKey 当表格可以多选时，所指定的 id
 * */
export const useSelection = (rowKey: string = 'id') => {
  const isSelected = ref(false);
  const selectedList = ref<{ [key: string | number]: any }[]>([]);

  // 当前选中的所有 ids 数组
  const selectedListIds = computed(() => {
    const ids: (string | number)[] = [];
    selectedList.value.forEach(item => ids.push(item[rowKey]));
    return ids;
  });

  /**
   * @description 多选操作
   * @param {Array} rowArr 当前选择的所有数据
   * @return void
   */
  const selectionChange = (rowArr: { [key: string]: any }[]) => {
    isSelected.value = !!rowArr.length;
    selectedList.value = rowArr;
  };

  return {
    isSelected,
    selectedList,
    selectedListIds,
    selectionChange
  };
};
