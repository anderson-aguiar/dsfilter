import './styles.css';

export default function FilterCard(){
    return(
        <section className='dsf-container dsf-filter-card'>
            <form className='dsf-form'>
                <input type="text" placeholder='Preço mínimo'/>
                <input type="text" placeholder='Preço máximo'/>
                <button className='dsf-filter-card-button'>Filtrar</button>
            </form>
        </section>
    );
}