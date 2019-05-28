
export let name = 'TutorialsPoint'

let company = {
    getName:function(){
        return name
    },
    setName:function(newName){
        name =newName
    }

}
//one per module
export default company