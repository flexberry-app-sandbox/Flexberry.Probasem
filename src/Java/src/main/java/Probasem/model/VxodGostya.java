package Probasem.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probasem.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ВходГостя
 */
@Entity(name = "IISProbasemВходГостя")
@Table(schema = "public", name = "ВходГостя")
public class VxodGostya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RegisKartGostej")
    @Convert("RegisKartGostej")
    @Column(name = "РегисКартГостей", length = 16, unique = true, nullable = false)
    private UUID _regiskartgostejid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RegisKartGostej", insertable = false, updatable = false)
    private RegisKartGostej regiskartgostej;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RegistracVxod")
    @Convert("RegistracVxod")
    @Column(name = "РегистрацВход", length = 16, unique = true, nullable = false)
    private UUID _registracvxodid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RegistracVxod", insertable = false, updatable = false)
    private RegistracVxod registracvxod;


    public VxodGostya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}