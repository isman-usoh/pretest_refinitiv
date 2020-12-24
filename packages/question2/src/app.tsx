import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export function App() {
    const [loading, setLoading] = useState<boolean>(false)
    const [categories, setCategories] = useState<string[]>([])
    const [avalableCategories, setAvalableCategories] = useState<string[]>([])
    useEffect(() => {
        loadCategories()
    }, [])


    const loadCategories = async () => {
        setLoading(true)
        try {
            const result = await fetch('https://api.publicapis.org/categories')
            const data = await result.json()
            setCategories(data)
            setAvalableCategories(data)
        } catch (error) {
            setCategories([])
        }
        setLoading(false)
    }

    const filterCategories = (e: any) => {
        const query = e.target.value as string
        if (query === '') {
            setAvalableCategories(categories)
        } else {
            const filterData = categories.filter(category => {
                return category.toLowerCase().search(query.toLowerCase()) > -1
            })
            setAvalableCategories(filterData)
        }
    }

    return (
        <Root>
            <input onChange={filterCategories} />

            <List>
                {avalableCategories.map(category => {
                    return (<Item>{category}</Item>)
                })}
            </List>
        </Root>
    );
}


const Root = styled.div`
    padding: 50px;
`

const List = styled.ul``


const Item = styled.li``