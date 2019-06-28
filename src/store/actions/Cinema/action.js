export default {
    handleDisplay(){
        return{
            type:"DISPLAY",
        }
    },
    handleGoDetailsPage(id){
        return{
            type:"GODETAILSPAGE",
            id
        }
    }
}