export const getDimensions = (file: File): Promise<{ width: number; height: number }> => {
  return new Promise((rs, rj) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    var img = new Image();
    img.onload = function () {
      rs({
        width: img.width,
        height: img.height,
      });
    };

    img.onerror = function (error) {
      rj(error);
    };

    reader.onload = function (file) {
      img.src = file.target?.result?.toString() || '';
    };
  });
};
