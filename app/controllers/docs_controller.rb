class DocsController < ApplicationController

    def index 
        @allRoutes = allRoutes
        render template: "docs/index"
    end

    private 
        def allRoutes
            path = __dir__ + '/../../config/routes.rb'
            textArray = []
            File.open(path).each_line do |line|
                textArray.push(line)
            end
            textArray.shift
            textArray.shift
            textArray.pop

            allRoutes = []
            textArray.each do |line|
                newLine = line
                newLine = newLine.split(' ')
                method = newLine[0].upcase
                routePath = newLine[1].split('')
                routePath.shift
                routePath.pop
                route = routePath.join('')

                camelCased = ''
                camelCased += method.downcase
                
                tempRoute = route
                params = []

                tempRoute.split('/').each do |l|
                    cap = l[0]
                    if cap == ':'
                        temp = l.slice(1)
                        params.push(temp)
                        camelCased += temp.capitalize + 'Param'
                    else
                        camelCased += l.capitalize       
                    end
                end

                routeHeader = ''
                submitButtonColor = ''
                if method == 'GET'
                    routeHeader = 'bg-success text-white'
                    submitButtonColor = 'btn btn-outline-success'
                end

                if method == 'POST'
                    routeHeader = 'bg-info text-white'
                    submitButtonColor = 'btn btn-outline-info'
                end

                if method == 'PATCH'
                    routeHeader = 'bg-warning text-white'
                    submitButtonColor = 'btn btn-outline-warning'
                end

                if method == 'PUT'
                    routeHeader = 'bg-warning text-white'
                    submitButtonColor = 'btn btn-outline-warning'
                end

                if method == 'DELETE'
                    routeHeader = 'bg-danger text-white'
                    submitButtonColor = 'btn btn-outline-danger'
                end

                allRoutes.push({
                    method: method, 
                    route: route, 
                    params: params,
                    routeHeader: routeHeader,
                    submitButtonColor: submitButtonColor,
                    camelCased: camelCased,
                    allowParams: tempRoute.split(':').length > 1,
                    allowBody: if method == 'GET' then false else method != 'DELETE' end,
                })
            end

            return allRoutes
        end

end
