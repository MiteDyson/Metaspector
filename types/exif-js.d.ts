// types/exif-js.d.ts
declare module "exif-js" {
  const EXIF: {
    getData: (img: any, callback: () => void) => void;
    getAllTags: (img: any) => Record<string, any>;
  };
  export default EXIF;
}
