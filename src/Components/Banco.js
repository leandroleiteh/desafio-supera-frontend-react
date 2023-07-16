import React, { useEffect } from 'react'
import Input from './Input'
import { useState } from 'react';
import TransferenciaService from '../Service/TransferenciaService';
import MyDataTable from './MyDataTable';

const transferenciaService = new TransferenciaService;

const Banco = () => {

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [operatorName, setOperatorName] = useState('');

    const [myDataSet, setMyDataSet] = useState([]);

    const search = () => {

        if (startDate && endDate !== '') {
            if (startDate > endDate) {
                // toast.error("Data Inválida");
                alert("Data Inválida");
                setEndDate("");
                setStartDate("")
            } else {
                transferenciaService.readByDate(startDate.replace(/ /g, ''), endDate.replace(/ /g, ''))
                    .then(response => {
                        // toast.success("Gráfico Atualizado");
                        alert("Atualizado");
                        createDataTableObject(response.data);

                    }).catch()
            }
        } else if (operatorName !== '') {
            transferenciaService.findByOperator(operatorName)
                .then(response => {
                    alert('busca por operador')
                    createDataTableObject(response.data)
                }).catch(err => {

                })

        } else {
            transferenciaService.findAlltransferencias()
                .then(response => {

                    createDataTableObject(response.data)

                }).catch(err => {

                }).finally(
            )
        }


    }


    function createDataTableObject(content) {

        console.log("Content", content)

        setMyDataSet(content);
    }

    const columns = [
        {
            name: 'Dados',
            selector: row => row.dataTransferencia,
        },
        {
            name: 'Valentia',
            selector: row => row.valor,
        },
        {
            name: 'Tipo',
            selector: row => row.tipo,
        },
        {
            name: 'Nome operator transacionado',
            selector: row => row.nomeOperadorTransacao,
        },
    ];


    return (
        <>

            <section className="container border px-5 py-5 mb-5 my-5 font-weight-bold ">
                <div className=" ">

                    <div className="row">

                        <Input
                            id="startDate"
                            label="Data Início"
                            type="date"
                            name="startDate"
                            value={startDate}
                            setValue={setStartDate} />

                        <Input
                            id="endDate"
                            label="Data Fim"
                            type="date"
                            name="endDate"
                            value={endDate}
                            setValue={setEndDate} />

                        <Input
                            id="operatorName"
                            label="Nome operador"
                            type="text"
                            name="operatorName"
                            value={operatorName}
                            setValue={setOperatorName} />

                        <div className="col-1">
                            <button
                                className="btn btn-primary mt-5 "
                                onClick={search}>Pesquisar</button>
                        </div>

                        <MyDataTable
                            columns={columns}
                            data={myDataSet}
                        />

                    </div>

                </div>

            </section>
        </>
    )
}

export default Banco