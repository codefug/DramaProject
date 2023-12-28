function readImageFile() {
    var input = document.getElementById('imageSelector');
    const label = document.querySelector('label[for="imageSelector"]');
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            // 읽어들인 데이터는 e.target.result에 있습니다.
            var imageDataUrl = e.target.result;
            label.setAttribute("style", `background:url(${imageDataUrl});background-size:cover;`);
            // 여기에서 imageDataUrl을 사용하거나 필요한 작업을 수행할 수 있습니다.
            label.setAttribute("value", imageDataUrl);
        };

        // 이미지 파일을 데이터 URL로 읽기
        reader.readAsDataURL(input.files[0]);
    }
}

export { readImageFile }