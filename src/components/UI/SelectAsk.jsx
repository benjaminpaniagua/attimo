import Select from '@mui/material/Select';

export function SelectAsk() {

    const [value, setValue] = React.useState('noSchol');   
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div >
            <select className="mt-3 text-base">
                <option value="noShol">No scholarship</option>
                <option value="partial">Partial scholarship</option>
                <option value="full">Full scholarship</option>
            </select>
        </div>
        
    );
}

export default SelectAsk;
