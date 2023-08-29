import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

import './ContactoInstitucion.css';

function ContactoInstitucion() {
    return (
        <>
            <h2 className="border-bottom border-primary border-5 opacity-100 title-contacto fw-bolder">UNER 👨‍💼👩‍💼</h2>
            <ListGroup as="ol" className="list-group list-group-flush ol-contacto">
                <ListGroup.Item as="li" className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Contacto Importante UNER 1</div>
                        <p>
                            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGUlEQVR4nO2aS0hVURSG/8pepDWM7AFFBZk1CdTuXeucHko2qAbRpGkkiaLUJCcNgmjeoIggEGleNGkShRSRSJNUGkVBZVH0VkrF/tjn3m5iaXuf1z1CCxZcLpd//9866yz22ecC/6MQVKyloIWKHgoeUfCOggkqxql4S0U/Bd1UHGMO1chKUNBMxV0qJqmgZZrf3qagsbzGBX0Opv+eggepgrARKyi4Ftn4nyDdzKEqWfMeNlHwJHbzWsoh+tiYlPltFLxJ0DyLV2KYHrbEaz6HagpeJG5eS/mKPtbEY34HFgYjMD3zLOZD+qiIDqA4WwbzLOaZaObzWEfBN8cefkwPncxjK5uwLEjz2XwnGHAEGGUDVkep/kUH498paCUwf0a9I1hARRsVYw4QF8KZz6GKii/W5j3sdijMHmsIwSdzFd0BFIcdqnQihH67g/4hdwDBZeuen6Vt/tFOg5YAl8IA2O1zBB3O4r/XOGkJcN9dvLAFtgGoCQ3go9Zyjdfu4ubGtBH3URkaIBcMCqsh4S5uZrCNeIQdJOuw3BLgq7u44FlmWkjxNAxAr5W4h87Eb2LBnTDi5y3FB8xIDDlGhyyvwDl3gDz2W4qbbHPWF3Q46O9zB2jGYio+WC4wRsFeB/ONxdMKWuR71mCRM0CwkOKKQ5XM3qZ9tnYK2qZQeVvzNDuCUOaLlap3APiVg8HNaSaMj8pi1lJwyqHnOSXrQgMEEIp7IRaNJwW9kcwHAB4Olg0gjwORAQIIc/iUfvX7CMyLB0DhpQ7g2T8g2UEIbqQIcD1W81Me8EdSMD9KxfrYAQIIRVcKvX86EfMBgI+KhG/ofnOQlhhAACHYYH1a4Vb5EQo2J2p+CkRLAgDHUzFfglDcjBHgVmwz3xqgHiuDo/DolR82WqmaL0F42Ol4TDg9x+lBy2K+BFE46wxb/VZkIai4GgKgB1kJNmCp40uQfvpYgiwFFauoeG5h/mVsr4/iDnNGRMHHWcx/pmA7shzMY9cMk8lMnCbMhaCHo9P+ejBpvsNcCprXTQXzP8K8AEEWorj97kpykZ+xubp/rAMA/QAAAABJRU5ErkJggg=="/>Direccion 1
                            <br/>
                            <Image src="assets/icons/phone.svg"/>345 1234567
                        </p>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Contacto Importante UNER 2</div>
                        <p>
                            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGUlEQVR4nO2aS0hVURSG/8pepDWM7AFFBZk1CdTuXeucHko2qAbRpGkkiaLUJCcNgmjeoIggEGleNGkShRSRSJNUGkVBZVH0VkrF/tjn3m5iaXuf1z1CCxZcLpd//9866yz22ecC/6MQVKyloIWKHgoeUfCOggkqxql4S0U/Bd1UHGMO1chKUNBMxV0qJqmgZZrf3qagsbzGBX0Opv+eggepgrARKyi4Ftn4nyDdzKEqWfMeNlHwJHbzWsoh+tiYlPltFLxJ0DyLV2KYHrbEaz6HagpeJG5eS/mKPtbEY34HFgYjMD3zLOZD+qiIDqA4WwbzLOaZaObzWEfBN8cefkwPncxjK5uwLEjz2XwnGHAEGGUDVkep/kUH498paCUwf0a9I1hARRsVYw4QF8KZz6GKii/W5j3sdijMHmsIwSdzFd0BFIcdqnQihH67g/4hdwDBZeuen6Vt/tFOg5YAl8IA2O1zBB3O4r/XOGkJcN9dvLAFtgGoCQ3go9Zyjdfu4ubGtBH3URkaIBcMCqsh4S5uZrCNeIQdJOuw3BLgq7u44FlmWkjxNAxAr5W4h87Eb2LBnTDi5y3FB8xIDDlGhyyvwDl3gDz2W4qbbHPWF3Q46O9zB2jGYio+WC4wRsFeB/ONxdMKWuR71mCRM0CwkOKKQ5XM3qZ9tnYK2qZQeVvzNDuCUOaLlap3APiVg8HNaSaMj8pi1lJwyqHnOSXrQgMEEIp7IRaNJwW9kcwHAB4Olg0gjwORAQIIc/iUfvX7CMyLB0DhpQ7g2T8g2UEIbqQIcD1W81Me8EdSMD9KxfrYAQIIRVcKvX86EfMBgI+KhG/ofnOQlhhAACHYYH1a4Vb5EQo2J2p+CkRLAgDHUzFfglDcjBHgVmwz3xqgHiuDo/DolR82WqmaL0F42Ol4TDg9x+lBy2K+BFE46wxb/VZkIai4GgKgB1kJNmCp40uQfvpYgiwFFauoeG5h/mVsr4/iDnNGRMHHWcx/pmA7shzMY9cMk8lMnCbMhaCHo9P+ejBpvsNcCprXTQXzP8K8AEEWorj97kpykZ+xubp/rAMA/QAAAABJRU5ErkJggg=="/>Direccion 2
                            <br/>
                            <Image src="assets/icons/phone.svg"/>345 1234567
                        </p>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Contacto Importante UNER 3</div>
                        <p>
                            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGUlEQVR4nO2aS0hVURSG/8pepDWM7AFFBZk1CdTuXeucHko2qAbRpGkkiaLUJCcNgmjeoIggEGleNGkShRSRSJNUGkVBZVH0VkrF/tjn3m5iaXuf1z1CCxZcLpd//9866yz22ecC/6MQVKyloIWKHgoeUfCOggkqxql4S0U/Bd1UHGMO1chKUNBMxV0qJqmgZZrf3qagsbzGBX0Opv+eggepgrARKyi4Ftn4nyDdzKEqWfMeNlHwJHbzWsoh+tiYlPltFLxJ0DyLV2KYHrbEaz6HagpeJG5eS/mKPtbEY34HFgYjMD3zLOZD+qiIDqA4WwbzLOaZaObzWEfBN8cefkwPncxjK5uwLEjz2XwnGHAEGGUDVkep/kUH498paCUwf0a9I1hARRsVYw4QF8KZz6GKii/W5j3sdijMHmsIwSdzFd0BFIcdqnQihH67g/4hdwDBZeuen6Vt/tFOg5YAl8IA2O1zBB3O4r/XOGkJcN9dvLAFtgGoCQ3go9Zyjdfu4ubGtBH3URkaIBcMCqsh4S5uZrCNeIQdJOuw3BLgq7u44FlmWkjxNAxAr5W4h87Eb2LBnTDi5y3FB8xIDDlGhyyvwDl3gDz2W4qbbHPWF3Q46O9zB2jGYio+WC4wRsFeB/ONxdMKWuR71mCRM0CwkOKKQ5XM3qZ9tnYK2qZQeVvzNDuCUOaLlap3APiVg8HNaSaMj8pi1lJwyqHnOSXrQgMEEIp7IRaNJwW9kcwHAB4Olg0gjwORAQIIc/iUfvX7CMyLB0DhpQ7g2T8g2UEIbqQIcD1W81Me8EdSMD9KxfrYAQIIRVcKvX86EfMBgI+KhG/ofnOQlhhAACHYYH1a4Vb5EQo2J2p+CkRLAgDHUzFfglDcjBHgVmwz3xqgHiuDo/DolR82WqmaL0F42Ol4TDg9x+lBy2K+BFE46wxb/VZkIai4GgKgB1kJNmCp40uQfvpYgiwFFauoeG5h/mVsr4/iDnNGRMHHWcx/pmA7shzMY9cMk8lMnCbMhaCHo9P+ejBpvsNcCprXTQXzP8K8AEEWorj97kpykZ+xubp/rAMA/QAAAABJRU5ErkJggg=="/>Direccion 3
                            <br/>
                            <Image src="assets/icons/phone.svg"/>345 1234567
                        </p>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Contacto Importante UNER 4</div>
                        <p>
                            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGUlEQVR4nO2aS0hVURSG/8pepDWM7AFFBZk1CdTuXeucHko2qAbRpGkkiaLUJCcNgmjeoIggEGleNGkShRSRSJNUGkVBZVH0VkrF/tjn3m5iaXuf1z1CCxZcLpd//9866yz22ecC/6MQVKyloIWKHgoeUfCOggkqxql4S0U/Bd1UHGMO1chKUNBMxV0qJqmgZZrf3qagsbzGBX0Opv+eggepgrARKyi4Ftn4nyDdzKEqWfMeNlHwJHbzWsoh+tiYlPltFLxJ0DyLV2KYHrbEaz6HagpeJG5eS/mKPtbEY34HFgYjMD3zLOZD+qiIDqA4WwbzLOaZaObzWEfBN8cefkwPncxjK5uwLEjz2XwnGHAEGGUDVkep/kUH498paCUwf0a9I1hARRsVYw4QF8KZz6GKii/W5j3sdijMHmsIwSdzFd0BFIcdqnQihH67g/4hdwDBZeuen6Vt/tFOg5YAl8IA2O1zBB3O4r/XOGkJcN9dvLAFtgGoCQ3go9Zyjdfu4ubGtBH3URkaIBcMCqsh4S5uZrCNeIQdJOuw3BLgq7u44FlmWkjxNAxAr5W4h87Eb2LBnTDi5y3FB8xIDDlGhyyvwDl3gDz2W4qbbHPWF3Q46O9zB2jGYio+WC4wRsFeB/ONxdMKWuR71mCRM0CwkOKKQ5XM3qZ9tnYK2qZQeVvzNDuCUOaLlap3APiVg8HNaSaMj8pi1lJwyqHnOSXrQgMEEIp7IRaNJwW9kcwHAB4Olg0gjwORAQIIc/iUfvX7CMyLB0DhpQ7g2T8g2UEIbqQIcD1W81Me8EdSMD9KxfrYAQIIRVcKvX86EfMBgI+KhG/ofnOQlhhAACHYYH1a4Vb5EQo2J2p+CkRLAgDHUzFfglDcjBHgVmwz3xqgHiuDo/DolR82WqmaL0F42Ol4TDg9x+lBy2K+BFE46wxb/VZkIai4GgKgB1kJNmCp40uQfvpYgiwFFauoeG5h/mVsr4/iDnNGRMHHWcx/pmA7shzMY9cMk8lMnCbMhaCHo9P+ejBpvsNcCprXTQXzP8K8AEEWorj97kpykZ+xubp/rAMA/QAAAABJRU5ErkJggg=="/>Direccion 4
                            <br/>
                            <Image src="assets/icons/phone.svg"/>345 1234567
                        </p>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Contacto Importante UNER 5</div>
                        <p>
                            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGUlEQVR4nO2aS0hVURSG/8pepDWM7AFFBZk1CdTuXeucHko2qAbRpGkkiaLUJCcNgmjeoIggEGleNGkShRSRSJNUGkVBZVH0VkrF/tjn3m5iaXuf1z1CCxZcLpd//9866yz22ecC/6MQVKyloIWKHgoeUfCOggkqxql4S0U/Bd1UHGMO1chKUNBMxV0qJqmgZZrf3qagsbzGBX0Opv+eggepgrARKyi4Ftn4nyDdzKEqWfMeNlHwJHbzWsoh+tiYlPltFLxJ0DyLV2KYHrbEaz6HagpeJG5eS/mKPtbEY34HFgYjMD3zLOZD+qiIDqA4WwbzLOaZaObzWEfBN8cefkwPncxjK5uwLEjz2XwnGHAEGGUDVkep/kUH498paCUwf0a9I1hARRsVYw4QF8KZz6GKii/W5j3sdijMHmsIwSdzFd0BFIcdqnQihH67g/4hdwDBZeuen6Vt/tFOg5YAl8IA2O1zBB3O4r/XOGkJcN9dvLAFtgGoCQ3go9Zyjdfu4ubGtBH3URkaIBcMCqsh4S5uZrCNeIQdJOuw3BLgq7u44FlmWkjxNAxAr5W4h87Eb2LBnTDi5y3FB8xIDDlGhyyvwDl3gDz2W4qbbHPWF3Q46O9zB2jGYio+WC4wRsFeB/ONxdMKWuR71mCRM0CwkOKKQ5XM3qZ9tnYK2qZQeVvzNDuCUOaLlap3APiVg8HNaSaMj8pi1lJwyqHnOSXrQgMEEIp7IRaNJwW9kcwHAB4Olg0gjwORAQIIc/iUfvX7CMyLB0DhpQ7g2T8g2UEIbqQIcD1W81Me8EdSMD9KxfrYAQIIRVcKvX86EfMBgI+KhG/ofnOQlhhAACHYYH1a4Vb5EQo2J2p+CkRLAgDHUzFfglDcjBHgVmwz3xqgHiuDo/DolR82WqmaL0F42Ol4TDg9x+lBy2K+BFE46wxb/VZkIai4GgKgB1kJNmCp40uQfvpYgiwFFauoeG5h/mVsr4/iDnNGRMHHWcx/pmA7shzMY9cMk8lMnCbMhaCHo9P+ejBpvsNcCprXTQXzP8K8AEEWorj97kpykZ+xubp/rAMA/QAAAABJRU5ErkJggg=="/>Direccion 5
                            <br/>
                            <Image src="assets/icons/phone.svg"/>345 1234567
                        </p>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Contacto Importante UNER 6</div>
                        <p>
                            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGUlEQVR4nO2aS0hVURSG/8pepDWM7AFFBZk1CdTuXeucHko2qAbRpGkkiaLUJCcNgmjeoIggEGleNGkShRSRSJNUGkVBZVH0VkrF/tjn3m5iaXuf1z1CCxZcLpd//9866yz22ecC/6MQVKyloIWKHgoeUfCOggkqxql4S0U/Bd1UHGMO1chKUNBMxV0qJqmgZZrf3qagsbzGBX0Opv+eggepgrARKyi4Ftn4nyDdzKEqWfMeNlHwJHbzWsoh+tiYlPltFLxJ0DyLV2KYHrbEaz6HagpeJG5eS/mKPtbEY34HFgYjMD3zLOZD+qiIDqA4WwbzLOaZaObzWEfBN8cefkwPncxjK5uwLEjz2XwnGHAEGGUDVkep/kUH498paCUwf0a9I1hARRsVYw4QF8KZz6GKii/W5j3sdijMHmsIwSdzFd0BFIcdqnQihH67g/4hdwDBZeuen6Vt/tFOg5YAl8IA2O1zBB3O4r/XOGkJcN9dvLAFtgGoCQ3go9Zyjdfu4ubGtBH3URkaIBcMCqsh4S5uZrCNeIQdJOuw3BLgq7u44FlmWkjxNAxAr5W4h87Eb2LBnTDi5y3FB8xIDDlGhyyvwDl3gDz2W4qbbHPWF3Q46O9zB2jGYio+WC4wRsFeB/ONxdMKWuR71mCRM0CwkOKKQ5XM3qZ9tnYK2qZQeVvzNDuCUOaLlap3APiVg8HNaSaMj8pi1lJwyqHnOSXrQgMEEIp7IRaNJwW9kcwHAB4Olg0gjwORAQIIc/iUfvX7CMyLB0DhpQ7g2T8g2UEIbqQIcD1W81Me8EdSMD9KxfrYAQIIRVcKvX86EfMBgI+KhG/ofnOQlhhAACHYYH1a4Vb5EQo2J2p+CkRLAgDHUzFfglDcjBHgVmwz3xqgHiuDo/DolR82WqmaL0F42Ol4TDg9x+lBy2K+BFE46wxb/VZkIai4GgKgB1kJNmCp40uQfvpYgiwFFauoeG5h/mVsr4/iDnNGRMHHWcx/pmA7shzMY9cMk8lMnCbMhaCHo9P+ejBpvsNcCprXTQXzP8K8AEEWorj97kpykZ+xubp/rAMA/QAAAABJRU5ErkJggg=="/>Direccion 6
                            <br/>
                            <Image src="assets/icons/phone.svg"/>345 1234567
                        </p>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </>
    );
}

export default ContactoInstitucion;