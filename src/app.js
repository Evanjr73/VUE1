const MyNameApp = {
    data(){
        return{
            name:'',
            idade: 30,
            input_name: ""
        }
    },
    methods:{
        submitFrom(e){

           e.preventDefault();

           console.log(this.input_name); 
            

           this.name = this.input_name;
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")