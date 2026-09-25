export class Utils {
    /**
     * Busca o primeiro elemento em um array que atenda ao critério do filtro.
     * Retorna o elemento encontrado ou null se nenhum corresponder.
     * 
     * @param items Array de itens onde a busca será realizada.
     * @param filter Função callback de filtro que retorna boolean.
     */
    public static findOneOrNull<T>(items: T[], filter: (item: T) => boolean): T | null {
        const found = items.find(filter);
        return found !== undefined ? found : null;
    }

    public static isNullOrUndefined<T>(object: T | null | undefined): object is null | undefined {
        return object === null || object === undefined;
    }
}