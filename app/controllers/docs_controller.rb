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

                tempRoute.split('/').each do |l|
                    cap = l[0]
                    if cap == ':'
                        temp = l.slice(1)
                        camelCased += temp.capitalize + 'Param'
                    else
                        camelCased += l.capitalize       
                    end
                end

                allRoutes.push({ method: method, route: route, camelCased: camelCased })
            end

            return allRoutes
        end

end
