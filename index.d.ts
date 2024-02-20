interface NxStatic {
  fileUpload: (url: string, file: File, options?: any) => Promise<any>;
  fileUpload: (url: string, data: Record<string, any>, options?: any) => Promise<any>;
}
