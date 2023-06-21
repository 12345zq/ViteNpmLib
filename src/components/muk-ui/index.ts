import Button from "./button/index.vue"
export {Button}
const component = [Button]
const MukUI = {
    install(app:any){
        component.forEach(item =>{
            app.component(item.name, Button)
        })
    }
}
export default MukUI