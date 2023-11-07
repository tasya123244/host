const node_for_click_name = document.getElementById("for_click_name")

function find_edit_name(){
    document.getElementsByTagName('div')[4].innerText="Юлия"
}

node_for_click_name.addEventListener("click",find_edit_name)


const node_for_click_all = document.getElementById("for_click_all")

function find_edit_all(){
      document.getElementsByTagName('div')[4].innerText='Julia'
      document.getElementsByTagName('div')[3].innerText='Bodrova'
      document.getElementsByTagName('div')[5].innerText='Vladimirovna'

}
node_for_click_all.addEventListener("click",find_edit_all)
