import { useTransaction } from "../hooks/useTransaction"

export function HistoryMobile() {

  const { transition } = useTransaction()

  const formatCurrency = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <section className="w-4/5">
      <>
        <div className="flex justify-between items-center mb-4"> <h2 className="text-titulos text-[24px] leading-8">Listagem</h2> <h3 className="text-textos text-[14px] leading-5 font-medium">{transition.length} {transition.length > 1 ? 'items' : 'item'}</h3></div>



        <div className="w-full flex flex-col gap-y-2 pb-2">



          {transition ? <>            {transition?.map(transaction => {
            return (
              <>
                <div className="py-4 px-6  bg-shape_pricipal rounded-md">
                  <h2 className="text-titulos text-[14px] leading-5">{transaction.description}</h2>
                  <h2 className={`text-green text-[20px] leading-8 mt-2  ${transaction.tp_transition === 'deposit' ? 'text-green' : 'text-red-Button'}`}>{formatCurrency.format(transaction.value)}</h2>
                  <div className="flex justify-between text-[14px] leading-5 text-textos mt-5"><h3>{transaction.category}</h3>
                    <h3>{new Date(transaction.created_at).toLocaleDateString('pt-BT', { timeZone: 'America/Denver' })}</h3></div>
                </div>
              </>)
          })}</>
            : <> <div className="py-4 px-6  bg-shape_pricipal rounded-md">
              <h2 className="text-titulos text-[14px] leading-5">Desenvolvimento de site</h2>
              <h2 className="text-green text-[20px] leading-8 mt-2">R$ 12.000,00</h2>
              <div className="flex justify-between text-[14px] leading-5 text-textos mt-5"><h3>vendas</h3> <h3>26/06/2022</h3></div>
            </div>

              <div className="py-4 px-6  bg-shape_pricipal rounded-md">
                <h2 className="text-titulos text-[14px] leading-5">Desenvolvimento de site</h2>
                <h2 className="text-green text-[20px] leading-8 mt-2">R$ 12.000,00</h2>
                <div className="flex justify-between text-[14px] leading-5 text-textos mt-5"><h3>vendas</h3> <h3>26/06/2022</h3></div>
              </div></>}



        </div>
      </>
    </section>
  )
}