
export const handleUpdateUser = async (input, showSuccessNotification, route) => {

    try {
        const response = await fetch('https://test-hh2-d0g10rbm1-dzakis-projects-d73a5ed2.vercel.app/api/products', {
            method: 'PUT',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('access_token')
            },
            body: JSON.stringify(input)
        });
        const prod = await response.json()

        route.replace('/')

        if (!!response.ok) {
            showSuccessNotification({
                status: true,
                message: 'Success update user',
                color: 'green'
            })
        }
    } catch (error) {
        console.log(error);
    }
}
