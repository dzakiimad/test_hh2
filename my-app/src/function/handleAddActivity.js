export const handleAddActivity = async (input,showSuccessNotification, fetchDataActivity) => {
    try {
        let obj = {
            method: 'POST',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('access_token')
            },
            body: JSON.stringify(input)
        }
        const response = await fetch('https://test-hh2-d0g10rbm1-dzakis-projects-d73a5ed2.vercel.app/api/products', obj);
        const prod = await response.json()
        fetchDataActivity()
        document.getElementById('my_modal_1').close()
        if (!!response.ok) {
            showSuccessNotification({
                status: true,
                message: 'Berhasil menambah kegiatan!',
            })
        }
    } catch (error) {
        if (error.name == "SyntaxError") {
            showSuccessNotification({
                status: true,
                message: 'Masukkan data dengan benar!',
                color: 'red'
            })
        }
    }
}
