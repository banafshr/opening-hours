export type days = {
  hours: React.ReactElement | Array<any> | string;
  label: React.ReactElement | string;
  labelDecorator?: boolean | React.ReactElement;
  isClosed?: boolean | React.ReactElement;
}
export interface RenderTable  {
  days: Array<days>
  isLoading?: boolean
}