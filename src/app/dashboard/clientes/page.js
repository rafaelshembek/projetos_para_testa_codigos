'use client'
import { useState, useEffect } from "react";
export default function Clientes() {
    const [clients, setClients] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        cpf: '',
        email: '',
        phone: '',
        address: '',
        contractStart: '',
        contractEnd: '',
        status: 'Ativo',
    });
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        const savedClients = JSON.parse(localStorage.getItem('clients')) || [];
        setClients(savedClients);
    }, []);

    useEffect(() => {
        localStorage.setItem('clients', JSON.stringify(clients));
    }, [clients]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            setClients((prev) => prev.map((c) => (c.id === editId ? { ...formData, id: editId } : c)));
            setEditMode(false);
            setEditId(null);
        } else {
            setClients((prev) => [...prev, { ...formData, id: Date.now() }]);
        }
        setFormData({
            name: '',
            cpf: '',
            email: '',
            phone: '',
            address: '',
            contractStart: '',
            contractEnd: '',
            status: 'Ativo',
        });
    };

    const toggleStatus = (id, newStatus) => {
        setClients((prev) =>
            prev.map((client) =>
                client.id === id ? { ...client, status: newStatus } : client
            )
        );
    };

    const handleEdit = (client) => {
        setFormData(client);
        setEditMode(true);
        setEditId(client.id);
    };

    const handleDelete = (id) => {
        if (confirm("Deseja realmente excluir este cliente?")) {
            setClients((prev) => prev.filter((c) => c.id !== id));
        }
    };

    return (
        <div className="w-full bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-zinc-400 mb-6 text-center">Cadastro de Clientes para Contrato</h1>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto mb-10">
                <div className="grid text-zinc-500 grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="name" value={formData.name} onChange={handleChange} placeholder="Nome completo" required className="p-2 border rounded-xl" />
                    <input name="cpf" value={formData.cpf} onChange={handleChange} placeholder="CPF" required className="p-2 border rounded-xl" />
                    <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" required className="p-2 border rounded-xl" />
                    <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefone" required className="p-2 border rounded-xl" />
                    <input name="address" value={formData.address} onChange={handleChange} placeholder="Endereço" required className="p-2 border rounded-xl" />
                    <input name="contractStart" value={formData.contractStart} onChange={handleChange} placeholder="Início do Contrato" type="date" required className="p-2 border rounded-xl" />
                    <input name="contractEnd" value={formData.contractEnd} onChange={handleChange} placeholder="Fim do Contrato" type="date" required className="p-2 border rounded-xl" />
                    <select name="status" value={formData.status} onChange={handleChange} className="p-2 border rounded-xl">
                        <option value="Ativo">Ativo</option>
                        <option value="Inativo">Inativo</option>
                    </select>
                </div>
                <button type="submit" className="mt-4 bg-blue-400 text-white px-6 py-2 rounded-xl hover:bg-blue-700">
                    {editMode ? 'Atualizar Cliente' : 'Cadastrar Cliente'}
                </button>
            </form>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-xl shadow-md">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="p-3">Nome</th>
                            <th className="p-3">CPF</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Telefone</th>
                            <th className="p-3">Endereço</th>
                            <th className="p-3">Início</th>
                            <th className="p-3">Término</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client) => (
                            <tr key={client.id} className="border-t ">
                                <td className="p-3 font-medium text-blue-600">{client.name}</td>
                                <td className="p-3">{client.cpf}</td>
                                <td className="p-3">{client.email}</td>
                                <td className="p-3">{client.phone}</td>
                                <td className="p-3">{client.address}</td>
                                <td className="p-3">{client.contractStart}</td>
                                <td className="p-3">{client.contractEnd}</td>
                                <td className="p-3">
                                    <span className={`px-3 py-1 rounded-full text-white text-sm ${client.status === 'Ativo' ? 'bg-green-500' : 'bg-red-500'}`}>
                                        {client.status}
                                    </span>
                                </td>
                                <td className="p-3 flex flex-col md:flex-row md:space-x-2">
                                    <button
                                        onClick={() => toggleStatus(client.id, 'Ativo')}
                                        className="px-1 h-9 font-light bg-green-500 text-white rounded-xl hover:bg-green-600"
                                    >
                                        Concluído
                                    </button>
                                    <button
                                        onClick={() => toggleStatus(client.id, 'Inativo')}
                                        className="px-3 h-9 text-sm bg-yellow-500 text-white rounded-xl hover:bg-yellow-600"
                                    >
                                        Não concluído
                                    </button>
                                    <button
                                        onClick={() => handleEdit(client)}
                                        className="px-3 py-1 text-sm bg-blue-500 text-white rounded-xl hover:bg-blue-600"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleDelete(client.id)}
                                        className="px-2 text-sm bg-red-600 text-white rounded-xl hover:bg-red-700"
                                    >
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {clients.length === 0 && (
                            <tr>
                                <td colSpan="9" className="text-center p-4 text-gray-400">Nenhum cliente cadastrado.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}