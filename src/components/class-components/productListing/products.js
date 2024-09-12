import axios from "axios";

const { Component } = require ("react");

class ProductListing extends Component{
    state={
        productList:[],
        loading: false,
        error:null,
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData=async()=>{

        this.setState({
            loading:true,
        })
        try{
         axios.get("https://fakestoreapi.com/products/")
        .then((response)=>{
            this.setState({
                productList: response.data,
                loading: false,
            });
        });

        }
        catch(err){
            this.setState(
                {error:"server is busy"}
            );
        }
        finally{
            this.setState({loading:false});
        }
    }

    render(){
        return(
            <>
            <h1>prduct list page</h1>
            { this.state.loading?(
                <h1> information is loading....</h1>
                    ):
                    (
                        <div>{
                            this.state.productList.map((eachProduct)=>{
                                return <h1>{eachProduct.title}</h1> 
                            })
                        }
                    </div>
                    )
               
            }
            </>
    )
    }
}



export default ProductListing;