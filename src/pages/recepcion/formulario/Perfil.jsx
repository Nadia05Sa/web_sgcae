import { useEffect, useState } from 'react';
import '../../../styles/Menu.css';
import FeedIcon from '@mui/icons-material/Feed';
import { AspectRatio, Box, FormControl, FormLabel, Input, Stack, Card, } from '@mui/joy';
import { Divider, Button, useTheme, useMediaQuery, } from '@mui/material';
import ImagenDefaul from '../../../assets/social-justice.png';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const MenuRecepcion = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { titulo } = location.state || {};
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));
    const [isLoading, setIsLoading] = useState(false);
    const [usuario, setUsuario] = useState({});
    const [preview, setPreview] = useState(null);

    const handleSubmit = async () => {
        setIsLoading(true);
        await authService.registrarOperador(usuario, navigate);
        setIsLoading(false);
    };

    const subirImgen = () => {
        const file = e.target.files[0];
        setUsuario({ ...usuario, fotoFile: file });
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result);
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    };

    return (
        <div className='menu-container'>
            <div>
                <div className='menu-conteiner-titulo' style={{ minWidth: "300px" }}>
                    <FeedIcon sx={{ fontSize: 40, color: 'white' }} />
                    <h1 className='menu-titulo'>Formulario</h1>
                </div>
                <div className='menu-container-formulario'>
                    <Box sx={{ width: '25%'}}>

                        <label>
                            <AspectRatio ratio="1">
                                <img
                                    src={preview || ImagenDefaul}
                                    alt="Foto"
                                />
                            </AspectRatio>
                        </label>
                        <Button
                            variant="contained"
                            component="label"
                            sx={{ width: '100%', marginTop: 5, backgroundColor: '#000000ff', color: '#ECAE28', fontWeight: 'bold' }}
                        >
                            Cargar imagen
                            <input
                                type="file"
                                accept="image/*"
                                hidden
                                id="fotoFile"
                                onChange={e => {
                                    const file = e.target.files[0];
                                    setUsuario({ ...usuario, fotoFile: file });
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => setPreview(reader.result);
                                        reader.readAsDataURL(file);
                                    } else {
                                        setPreview(null);
                                    }
                                }}
                            />
                        </Button>
                    </Box>

                    <Stack spacing={1} direction="column" sx={{ width:'45%', paddingInline: '2rem'  }}>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>Nombre</FormLabel>
                            <Input size="sm" value={usuario.nombre || ''} onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })} />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>CURP/CLAVE ELECTORAL</FormLabel>
                            <Input size="sm" value={usuario.curp || ''} onChange={(e) => setUsuario({ ...usuario, curp: e.target.value })} />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>Telefono</FormLabel>
                            <Input size="sm" value={usuario.telefono || ''} onChange={(e) => setUsuario({ ...usuario, telefono: e.target.value })} />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>Tipo de apoyo</FormLabel>
                            <Input size="sm" value={usuario.apoyo || ''} onChange={(e) => setUsuario({ ...usuario, apoyo: e.target.value })} />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>Seccion electoral</FormLabel>
                            <Input size="sm" value={usuario.seccion || ''} onChange={(e) => setUsuario({ ...usuario, seccion: e.target.value })} />
                        </FormControl>
                    </Stack>

                    <Stack spacing={1} direction="column" sx={{ width:'30%' }}>
                        <Button variant="contained" onClick={handleSubmit} disabled={isLoading} sx={{ width: '100%', marginTop: 5, backgroundColor: '#000000ff', color: '#ECAE28', fontWeight: 'bold' }}>
                            {isLoading ? <CircularProgress size={24} /> : 'Crear'}
                        </Button>
                        <Button variant="contained" onClick={() => navigate(-1)} disabled={isLoading} sx={{ width: '100%', marginTop: 5, backgroundColor: '#a3a3a3ff', color: '#ffffffff', fontWeight: 'bold' }}
                        >Cancelar</Button>

                    </Stack>
                </div>

            </div>

        </div>
    );
};

export default MenuRecepcion;
