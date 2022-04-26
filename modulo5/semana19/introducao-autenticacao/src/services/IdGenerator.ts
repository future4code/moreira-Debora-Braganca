import { v4 } from 'uuid';

export const IdGenerator = (): string => {
    return v4()
}