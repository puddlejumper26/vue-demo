var id = 0;
var vm = new Vue({

                el : "#app",

                methods : {

                    addDish : function(){

                        this.dish.id = this.dishs.length + 1;
                        this.dishs.push(this.dish);
                        this.dish = {};

                    },

                    delDish : function(dish){
                        var blength = this.dishs.length;
                        this.dishs.splice(dish.id-1,1 );

                        for(var i = 0;i < blength;i++){
                            if(dish.id < this.dishs[i].id){
                                this.dishs[i].id -= 1;
                            }
                        }
                    },

                    updateDish : function(dish){

                        $("#add-dish").css("display","none");
                        $("#update-dish").css("display","block");
                        id = dish.id;
                    },

                    updatedDish : function(){

                        this.dish.id = id;
                        this.dishs.splice(id-1,1,this.dish);
                        $("#add-dish").css("display","block");
                        $("#update-dish").css("display","none");
                        this.dish = {};

                    }

                },

                computed : {

                    filterDishs : function(){
                        var dishs = this.dishs;
                        var search = this.search;

                        return dishs.filter(function(dish){
                            return dish.name.toLowerCase().indexOf(search.toLocaleLowerCase()) != -1
                        });
                    }

                },

                data : {
                    dish : [{
                        id : 0,
                        desc : '',
                        name : '',
                        price : ''
                    }],

                    dishs : [{
                        id : 1,
                        desc : 'aaa',
                        name : 'name1',
                        price : 36.00
                    },{
                        id : 2,
                        desc : 'bbb',
                        name : 'name2',
                        price : 37.00
                    },{
                        id : 3,
                        desc : 'ccc',
                        name : 'name3',
                        price : 85.00
                    },{
                        id : 4,
                        desc : 'ddd',
                        name : 'name4',
                        price : 39.00

                    }],

                    search : ""       // no space between "", or default is to search for empty space

                }


            })