import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

const RenderComments= ({comments}) =>{
    if(comments != null){
        const cmnts = comments.map(comment => {
            //console.log(comment);
            return(
                <li className='list-item'>
                    <p>{comment.comment}</p>
                    <p>-- {comment.comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(Date.parse(comment.date)))}
                    </p>
                </li>
            );
        })
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
            console.log(`comments aren't being received`);
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
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <RenderDish dish = {props.dish}/>
                <RenderComments comments = {props.comments}/>
            </div>
        </div>
    )
}

export default Dishdetail;