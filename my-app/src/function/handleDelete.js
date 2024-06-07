export const handleDelete = async (id, fetchDataActivity) => {
    const response = await fetch(`https://test-hh2-d0g10rbm1-dzakis-projects-d73a5ed2.vercel.app/api/products`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('access_token')
        },
        cache: 'no-store',
        body: JSON.stringify({ id })
    })
    const prod = await response.json()
    fetchDataActivity()
}