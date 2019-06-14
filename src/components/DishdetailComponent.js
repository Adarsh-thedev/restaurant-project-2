import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

const RenderComments= ({dish}) =>{
    if(dish != null){
        const cmnts = dish.comments.map((commentContent) =>{
            return(
                <li className='list-item'>
                    <p>{commentContent.comment}</p>
                    <p>-- {commentContent.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(Date.parse(commentContent.date)))}
                    </p>
                </li>
            );
        });

        return(
            <div className='col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>
            </div>
        );
        }
        else{
            return(
                <div></div>
            );
        }
    }

const RenderDish =({dish}) => {
    if (dish != null) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}

const Dishdetail =(props) =>{
    const dish = props.dish;
    if (dish === null) {
        return (<div></div>)
    }
    // const dishItem = RenderDish(dish);
    // const commentItem = RenderComments(dish);
    return (
        <div className="container">
            <div className="row">
                <RenderDish dish = {props.dish}/>
                <RenderComments dish = {props.dish}/>
            </div>
        </div>
    )
}

export default Dishdetail;