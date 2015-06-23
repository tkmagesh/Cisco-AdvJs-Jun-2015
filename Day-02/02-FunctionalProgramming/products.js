var products = [
    {id : 5, name : "Pen", cost : 50, units : 60, category : 2},
    {id : 9, name : "Hen", cost : 90, units : 40, category : 1},
    {id : 7, name : "Den", cost : 40, units : 70, category : 2},
    {id : 3, name : "Zen", cost : 60, units : 80, category : 1},
    {id : 8, name : "Ken", cost : 70, units : 50, category : 2},
    {id : 2, name : "Ten", cost : 20, units : 30, category : 1},
]

function describe(title, fn){
    console.group(title);
    fn();
    console.groupEnd();
}


describe("Initial List", function(){
    console.table(products);
});
describe("Sort", function(){
    describe("Default Sorting [by id]", function(){
        function Sort(){
            for(var i=0; i<products.length-1; i++)
                for(var j=i + 1; j<products.length; j++){
                    var left = products[i],
                        right = products[j];
                    if (left.id > right.id){
                        products[i] = products[j];
                        products[j] = left;
                    }
                }
        }
        Sort();
        console.table(products);
    });
    describe("Sorting by attributes", function(){
        function Sort(attrName){
            for(var i=0; i<products.length-1; i++)
                for(var j=i + 1; j<products.length; j++){
                    var left = products[i],
                        right = products[j];
                    if (left[attrName] > right[attrName]){
                        products[i] = products[j];
                        products[j] = left;
                    }
                }
        }
        describe("by cost", function(){
            Sort("cost");
            console.table(products);
        });
        describe("by units", function(){
            Sort("units");
            console.table(products);
        });
    });
    describe("Sorting by any logic", function(){
        //1 -> left > right
        //0 -> left == right
        //-1 -> left < right
        function Sort(list, comparerFn){
            for(var i=0; i<products.length-1; i++)
                for(var j=i + 1; j<products.length; j++){
                    var left = products[i],
                        right = products[j];
                        var compareResult = comparerFn(left, right);
                    if (compareResult > 0){
                        products[i] = products[j];
                        products[j] = left;
                    }
                }

        }
        describe("by value [cost * units]", function(){
            function compareProductsByValue (left, right){
                var leftValue = left.cost * left.units,
                    rightValue = right.cost * right.units;
                if (leftValue < rightValue) return -1;
                if (leftValue === rightValue) return 0;
                return 1;
            }
            Sort(products, compareProductsByValue);
            console.table(products);
        });
    })
});

describe("Filter", function(){
   function filter(list, predicate){
       var result = [];
       for(var i=0; i<list.length; i++){
           var item = list[i];
           if (predicate(item))
               result.push(item);
       }
       return result;
   }

    function negate(predicate){
       return function(){
           return !predicate.apply(this,arguments);
       };
   }

    var costlyProductPredicate = function(product){
       return product.cost > 50;
   };
   var affordableProductPredicate = negate(costlyProductPredicate);


   var category1ProductPredicate = function(product){
       return product.category === 1;
   };
   var noncategory1ProductPredicate = negate(category1ProductPredicate);

   describe("By Costly Products [cost > 50]", function(){
       var costlyProducts = filter(products,costlyProductPredicate);
       console.table(costlyProducts);
   });
   describe("By Affordable Products [cost <= 50]", function(){
       var affordableProducts = filter(products,affordableProductPredicate);
       console.table(affordableProducts);
   });
   describe("By Category [category == 1]", function(){

       var category1Products = filter(products,category1ProductPredicate);
       console.table(category1Products);
   });
   describe("By Non Category [category != 1]", function(){

       var noncategory1Products = filter(products,noncategory1ProductPredicate);
       console.table(noncategory1Products);
   });
});

/*
Sort
Filter
ForEach
Min
Max
CountBy
Avg
Aggregate
All
Any
GroupBy
*/
