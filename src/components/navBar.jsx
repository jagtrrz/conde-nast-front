import React,  { useContext }  from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Context } from "../store/appContext";

export const NavBar = () => {
    const { store, actions } = useContext(Context);

    const goAllNews = () => {
        actions.setPath('everything')
        actions.setQueries({
            page: 1, 
            pageSize: 10, 
            q: store.queries.q
        })
        actions.setIsAllNews(true)
        actions.getAllNews()
    }

    const goTopHeadlines = () => {
        actions.setPath('top-headlines')
        actions.setQueries({
            page: 1, 
            pageSize: 10, 
            q: store.queries.q,
            country: store.queries.country ? store.queries.country : 'us'
        })
        actions.setIsAllNews(false)
        actions.getAllNews()
    }


    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Nav className="me-auto">
                    <Link to={"/"}>
                        <Button onClick={() => {goAllNews()}} variant="info" className="m-1">
                            All News
                        </Button>
                    </Link>
                    <Link to={"/"}>
                        <Button onClick={() => {goTopHeadlines()}} variant="info" className="m-1">
                            Top Headlines
                        </Button>
                    </Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}