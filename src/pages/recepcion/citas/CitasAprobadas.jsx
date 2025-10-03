import React, { useState, useEffect } from 'react';
import { Divider, Box, Button, Typography, InputAdornment, TextField, useTheme, useMediaQuery, IconButton, FormControl, TablePagination, Icon } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Paper, Tooltip, FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';
import { visuallyHidden } from '@mui/utils';
import { AspectRatio, FormLabel, Stack, Card, Input } from '@mui/joy';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import '../../../styles/Menu.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';


import DatosCita from './Datos';
import Swal from 'sweetalert2';

const headCells = [
    { id: 'no', numeric: true, center: true, disablePadding: false, label: 'Num.Cita' },
    { id: 'nombre', numeric: false, center: false, disablePadding: false, label: 'Nombre' },
    { id: 'fecha', numeric: false, center: false, disablePadding: false, label: 'Fecha de cita' },
    { id: 'hora', numeric: false, center: false, disablePadding: false, label: 'Hora de cita' },
    { id: 'estado', numeric: true, center: false, disablePadding: false, label: 'Estado' },
    { id: 'acciones', numeric: false, center: true, disablePadding: false, label: 'Acciones' },
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) return -1;
    if (b[orderBy] > a[orderBy]) return 1;
    return 0;
}

function getComparator(order, orderBy) {
    if (orderBy === 'no') {
        return order === 'desc'
            ? (a, b, aIndex, bIndex) => bIndex - aIndex
            : (a, b, aIndex, bIndex) => aIndex - bIndex;
    }
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };
    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (

                    <TableCell
                        key={headCell.id}
                        align={headCell.center ? 'center' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {headCell.id !== 'acciones' && headCell.id !== 'estado' ? (
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        ) : (
                            headCell.label
                        )}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const MenuRecepcion = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    const [listaCitas, setListaCitas] = useState(DatosCita);

    const [busqueda, setBusqueda] = useState('');

    const [stateUpdate, setStateUpdate] = useState(false);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('no');
    const [dense, setDense] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const [isLoading, setIsLoading] = useState(false);

    // Configuracion para la tabla 
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const citasFiltradas = (listaCitas || []).filter((cita) => {
        const coincideBusqueda = busqueda ? (
            (cita.nombre?.toLowerCase() || '') +
            ' ' +
            (cita.fecha?.toLowerCase() || '') +
            ' ' +
            (cita.modelo?.toLowerCase() || '') +
            ' ' +
            (cita.hora?.toLowerCase() || '') +
            ' ' +
            (cita.estado?.toLowerCase() || '')

        ).includes(busqueda.toLowerCase())
            : true;
        return coincideBusqueda;
    });

    const visibleRows = React.useMemo(() => {
        let sortedRows;
        if (orderBy === 'no') {
            const indexed = citasFiltradas.map((row, idx) => ({ row, idx }));
            sortedRows = indexed
                .sort((a, b) => getComparator(order, orderBy)(a.row, b.row, a.idx, b.idx))
                .map(({ row }) => row);
        } else {
            sortedRows = [...citasFiltradas].sort(getComparator(order, orderBy));
        }
        return sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }, [order, orderBy, page, rowsPerPage, citasFiltradas]);
    
    if (location.pathname.includes('datos')) {
        return <Outlet />;
    }
    return (
        <div className='menu-container'>
            <div>
                <div className='menu-conteiner-titulo' style={{ minWidth: "300px" }}>
                    <CalendarMonthIcon sx={{ fontSize: 40, color: 'white' }} />
                    <h1 className='menu-titulo'>Citas Aprobadas</h1>
                </div>
                <div className='menu-container-tabla'>
                    {/* Tabla de citas */}
                    {(listaCitas && listaCitas.length >= 0) ? (
                        <Box>
                            <TableContainer component={Paper} sx={{ maxHeight: '70vh', width: '100%', background: '#DDD' }}>                                <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: "1px solid #000", }}>
                                {/* Paginacion */}
                                <TablePagination
                                    component="div"
                                    labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count !== -1 ? count : `más de ${to}`}`}
                                    count={listaCitas.length}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    rowsPerPageOptions={[5, 10, 15, 20]}
                                    getItemAriaLabel={(count) => (`Pagina ${count === 'next' ? 'Siguiente' : 'Anterior'}`)}
                                    labelRowsPerPage="Filas"
                                    rowsPerPage={rowsPerPage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </Box>
                                <Table
                                    size={'medium'}
                                >
                                    {/* Titulos */}
                                    <EnhancedTableHead
                                        order={order}
                                        orderBy={orderBy}
                                        onRequestSort={handleRequestSort}
                                    />
                                    {/* Datos */}
                                    <TableBody>
                                        {visibleRows.map((item, index) => (
                                            <TableRow hover tabIndex={-1} key={item.id}>
                                                <TableCell align="center">{item.id}</TableCell>

                                                <TableCell align='left'>{item.nombre}</TableCell>
                                                <TableCell align='left'>{item.fecha}</TableCell>

                                                <TableCell align='left'>{item.hora}</TableCell>

                                                <TableCell align='left'>{item.estado}</TableCell>

                                                <TableCell align='center'>
                                                    <Tooltip title={stateUpdate ? 'Agregar' : 'Quitar'}>
                                                        <IconButton onClick={() => navigate('datos', { state: { id: item.id } })} color="primary">
                                                            <VisibilityOutlinedIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>

                                            </TableRow>
                                        ))}
                                        {visibleRows.length === 0 && (
                                            <TableRow>
                                                <TableCell colSpan={4} align="center">
                                                    {error ? error : "No hay equipos para mostrar."}
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>

                            </TableContainer>
                        </Box>)
                        : (
                            <Typography variant="body1" sx={{ textAlign: 'center', mt: 4 }}>
                                {error ? error : "Cargando información..."}
                                {error === null && <CircularProgress />}
                                {error && " Por favor, intenta recargar la página."}
                            </Typography>
                        )}
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default MenuRecepcion;
