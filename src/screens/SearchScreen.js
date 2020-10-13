import React, { useEffect, useRef } from 'react';
import { Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const debounce = function (func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function () {
        var last = _.now() - timestamp;
        console.log(last)
        if (last < wait && last >= 0) {
            console.log(1)
            timeout = setTimeout(later, wait - last);
        } else {
            console.log(2)
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            }
        }
    };

    return function () {
        context = this;
        args = arguments;
        timestamp = _.now();
        var callNow = immediate && !timeout;
        console.log(timeout)
        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }

        return result;
    };
};


const search = (query) => {
    console.log('query: ', query);
    return "query" + query;
}

const SearchPage = () => {

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => {
        setSearchQuery(query);
        debounce(search(searchQuery), 5000);
    };
    const inputEl = useRef(null);

    useEffect(() => {
        inputEl.current.focus();
    }, [inputEl])

    return (
        <View>
            <Searchbar
                style={{
                    borderRadius: 5,
                    fontSize: 22,
                }}
                placeholder="Search Here"
                onChangeText={onChangeSearch}
                ref={inputEl}
                value={searchQuery}
            />
            <View>
                <Text>Lib </Text>
            </View>
        </View>
    )
}

export default SearchPage;