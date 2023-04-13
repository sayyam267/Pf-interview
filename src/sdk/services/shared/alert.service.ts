import {ServiceClass} from '@/decorators';
import Swal from 'sweetalert2';

@ServiceClass()
export class AlertService {
    public show(
        type: 'success' | 'warning' | 'error' | 'info' | 'question',
        message: string,
        background: string = '#ffffff',
        color: string = 'black',
        position?: 'top' | 'center' | 'bottom',
        confirmButtonColor: string = '#6455B0',
        timer?: number
    ) {
        return Swal.fire({
            icon: type,
            html: message,
            position: position ?? 'center',
            timer,
            background,
            confirmButtonColor,
            color
        });
    }
}
