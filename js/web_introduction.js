const button = document.getElementById("button");

function btn(){
    const query = 'input[name="movie"]:checked';
    const selectedElements =
        document.querySelectorAll(query);

    const name = document.getElementById("name").value;
    if(name=='') {
        alert("이름을 입력해야 합니다.");
        return;
    }
    alert(name + "님, 저와 " + selectedElements.length + "개의 취향이 같으시네요!");
    location.reload();
}

button.addEventListener("click", btn);


