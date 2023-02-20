import { Dispatch, Fragment, SetStateAction } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface Props {
  list?: any[];
  default: string;
  setParam: Dispatch<SetStateAction<any>>;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Dropdown: React.FC<Props> = (props) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          {props.default}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 min-w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 overflow-y-scroll max-h-72">
            {props.list?.map((item: any) => {
              return (
                <Menu.Item key={item}>
                  {({ active }) => (
                    <button
                      onClick={(pre) => props.setParam(item)}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-sm text-left"
                      )}
                    >
                      {item}
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default Dropdown;
