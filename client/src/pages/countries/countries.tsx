import React, {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_DATA_ABOUT_COUNTRIES} from "../../query/getDataAboutCountries";
import Preloader from "../../components/preloader/preloader";
import styles from './countries.module.scss'
import sortArrayOfObjects from "../../utils/sortArrayOfObjects";
import CheckboxGroup from "../../components/checkboxGroup/checkboxGroup";
import Error from "../../components/error/error";

export type Country = {
    name: string;
    continent: {
        name: string;
    };
    code: string;
    emoji: string;
}
const Countries: React.FunctionComponent = () => {
    const {data, loading, error} = useQuery(GET_DATA_ABOUT_COUNTRIES);
    const [countries, setCountries] = useState<Array<Country>>([]);
    useEffect(() => {
        if (!loading) {
            setCountries([...data.countries])
        }
    }, [data])
    if (loading) {
        return <Preloader/>
    }
    if (error) {
        return <Error text={String(error)}/>
    }
    const sortData = (e: any) => {
        const {name, value, checked} = e.target;
        const space = name.indexOf(' ');
        if (checked && space == -1) {
            const newArr = sortArrayOfObjects(countries, value, name);
            setCountries([...newArr])
        } else if (checked && space !== -1) {
            const names = name.split(' ');
            const newArr = sortArrayOfObjects(countries, value, names[0], names[1]);
            setCountries([...newArr])
        } else {
            setCountries([...data.countries])
        }

    }
    const objectForSortPanel = [
        {name: 'name', value: 'asc', text: 'sort by country asc'},
        {name: 'name', value: 'desc', text: 'sort by country desc'},
        {name: 'continent name', value: 'asc', text: 'sort by continent asc'},
        {name: 'continent name', value: 'desc', text: 'sort by continent desc'},
        {name: 'code', value: 'asc', text: 'sort by code asc'},
        {name: 'code', value: 'desc', text: 'sort by code desc'},
    ]
    return (
        <div className={styles.wrapper}>
            <div className={styles.sortPanel}>
                <CheckboxGroup arr={objectForSortPanel} func={sortData}/>
            </div>
            <table>
                <thead>
                <tr>
                    <td>Country</td>
                    <td>Continent</td>
                    <td>Code</td>
                    <td>Flag</td>
                </tr>
                </thead>
                <tbody>
                {
                    countries.map((el) => (
                        <tr key={el.code}>
                            <td>{el.name}</td>
                            <td>{el.continent.name}</td>
                            <td>{el.code}</td>
                            <td>{el.emoji}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}
export default Countries;