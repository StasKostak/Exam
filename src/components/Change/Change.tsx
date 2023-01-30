import { Typography } from '@mui/material'
import { Button, Grid } from '@mui/material'
import { Container } from '@mui/system'
import { useState } from 'react'

const Change = () => {
    const [count, setCount] = useState<number>(0)

    const changeCount = () => {
        setCount((prevState: number) => prevState + 1)
    }

    return (
        <>
            <Container>
                <Typography
                    variant="h4"
                    align="center"
                    sx={{
                        marginBottom: '40px',
                    }}
                    component="h1"
                >
                    Перше завдання
                </Typography>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={() => changeCount()}>
                        Change Count {count}
                    </Button>
                    <button onClick={() => changeCount()}>
                        Change Count ({count})
                    </button>
                </Grid>
            </Container>
        </>
    )
}
export default Change
