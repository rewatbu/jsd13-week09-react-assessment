const BASE_URL = "https://6a9133f27751d35ce47e4710.mockapi.io/";

export async function getMembers() {
    const response = await fetch(`${BASE_URL}/members`);
    return response.json();
}

export async function getMember(id) {
    const response = await fetch(`${BASE_URL}/members/${id}`);
    return response.json();
}

export async function createMember(member) {
    const response = await fetch(`${BASE_URL}/members`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(member),
    });

    return response.json();
}

export async function updateMember(id, member) {
    const response = await fetch(`${BASE_URL}/members/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(member),
    });

    return response.json();
}

export async function deleteMember(id) {
    const response = await fetch(`${BASE_URL}/members/${id}`, {
        method: "DELETE",
    });

    return response.json();
}
