const _url = process.env.REACT_APP_HOST

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            news: [],
            queries: {
                page: 1, 
                pageSize: 10, 
                q: 'bitcoin'
            },
            path: 'everything',
            isAllNews: true,
            sendFilters: true,
            countryOptions: [
                {
                    name: 'EEUU', 
                    value: 'us'
                },
                {
                    name: 'Mexico', 
                    value: 'mx'
                },
                {
                    name: 'Italy', 
                    value: 'it'
                },
                {
                    name: 'Great Britain', 
                    value: 'gb'
                },
            ]
		},

		actions: {
            getAllNews: () => {
                const queries = getStore().queries
                const path = getStore().path

                const _query = Object.keys(queries)
                    .map((key) => key + "=" + queries[key])
                    .join("&")
                const url = `${_url}${path}?${_query}`

                fetch((url), {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(async (res) => {
                    const response = await res.json();
                    setStore({ news: response.data.articles });
                }).catch(err => {
                    throw err
                })
			},

            setPath: (newPath) => {
                setStore({ path: newPath });
            },

            setQueries: (newQueries) => {
                setStore({ queries: newQueries });
            },

            setIsAllNews: (isAllNews) => {
                setStore({ isAllNews: isAllNews });
            },

            setSendFilters: () => {
                const sendFilters = getStore().sendFilters
                setStore({ sendFilters: !sendFilters });
            }
        }
	};
};

export default getState;