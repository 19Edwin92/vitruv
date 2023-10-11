export interface MockDataType {
  curriculumItemId: number;
  curriculumItemName: string;
  itemNo: number;
  mainType: string;
  unreleasedDeptCount: number;
  totalDeptCount: number;
}

export interface treatListType {
  curriculumItemName : string,
  treatNo:number
}
export interface CurriculumItemType {
  curriculumItemName : string,
  itemNo:number,
  mainType:string,
  unreleasedDeptCount:number,
  totalDeptCount:number,
  treatList:treatListType[]
}

export interface MockClassType {
  itemNo: number;
  curriculumItemList : CurriculumItemType[]
}